import { Avatar, Comment, Form, Input, List, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeContentModalAntd,
  closeModalAntd,
  handleOkModalAntdNoLodaing,
  openModalAntd,
} from "../../../../../Redux/actions/modal.action";
import ModalAntd from "../../../ModalAntd/ModalAntd";
import { cancelModalAntd } from "./../../../../../Redux/actions/modal.action";
import "./DanhGia.scss";
import DanhGiaClick from "./DanhGiaClick";

const { TextArea } = Input;

export default function DanhGia() {
  const [state, setState] = useState({
    comments: [],
    submitting: false,
    value: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      handleOkModalAntdNoLodaing({
        submitCallback: handleSubmit,
      })
    );

    dispatch(
      cancelModalAntd({
        cancelCallback: () => {
          dispatch(closeModalAntd());
        },
      })
    );
  }, [state.value]);

  useEffect(() => {
    dispatch(
      changeContentModalAntd({
        modalContent: (
          <Comment
            avatar={
              <Avatar
                src="https://ui-avatars.com/api/?name=Quan"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        ),
      })
    );
  }, [state.value]);

  const handleSubmit = () => {
    if (!state.value) {
      return;
    }

    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      setState({
        ...state,
        submitting: false,
        value: "",
        comments: [
          ...state.comments,
          {
            author: "Han Solo",
            avatar: "https://ui-avatars.com/api/?name=Quan",
            content: (
              <div className="cmt_content">
                <p>{state.value}</p>
                <Rate allowHalf disabled defaultValue={2.5} />
              </div>
            ),
          },
        ],
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const { comments, submitting, value } = state;

  return (
    <div className="danhgia custom_container">
      <ModalAntd
        componentClick={<DanhGiaClick />}
        submitBtnText={"Add comment"}
        htmlType="submit"
        cancelBtnText="Cancel"
        flagLoading={true}
        disabledOkBtn={state.value === "" ? true : false}
        showModalFunc={async () => {
          await dispatch(
            openModalAntd({
              title: "Bạn nghĩ gì về phim này?",
            })
          );

          await dispatch(
            changeContentModalAntd({
              modalContent: (
                <Comment
                  avatar={
                    <Avatar
                      src="https://ui-avatars.com/api/?name=Quan"
                      alt="Han Solo"
                    />
                  }
                  content={
                    <Editor
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      submitting={submitting}
                      value={""}
                    />
                  }
                />
              ),
            })
          );
        }}
      />

      {comments.length > 0 && <CommentList comments={comments} />}
    </div>
  );
}

const CommentList = ({ comments }) => {
  return (
    <div className="comment_group">
      <List
        className="comment_list"
        header={<p className="cmt_quantity">{`${comments.length} replies`}</p>}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li className="cmt_item">
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
            />
          </li>
        )}
      />
    </div>
  );
};

const Editor = ({ onChange, onSubmit, submitting, value }) => {
  console.log("value in Editor", value);
  return (
    <div>
      <Form.Item>
        <TextArea
          rows={4}
          onChange={onChange}
          value={value}
          placeholder="Bạn nghĩ gì về phim này?"
        />
      </Form.Item>
    </div>
  );
};

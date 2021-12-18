import React from 'react'
import LayoutContent from '../Admin/LayoutContentAdmin/LayoutContentAdmin';
import Header from './../User/components/Header/Header';

export default function AdminLayout({children}) {
    return (
    <div className="userLayout">
        <Header />
        <LayoutContent> {children}</LayoutContent>
    </div>
    )
}

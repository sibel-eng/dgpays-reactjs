import { Layout } from 'antd';
import React from 'react'
const {Footer: AntFooter}=Layout;
function Footer() {
    return (
        <>
            <AntFooter style={{textAlign : 'center'}}>
               User Panel Management Created by Sibel İskender
            </AntFooter>
        </>
    )
}

export default Footer

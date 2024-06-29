import React from 'react'
import style from './footer.module.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer_container}>
        <div className={style.footer_main}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>

        </div>
    <p className={style.footer_bottom}>© 2024 One Accord Surveyor . All Rights Reserved.</p>
    </div>
  )
}

export default Footer
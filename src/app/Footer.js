import React from "react";
import './styles.css'


function Footer() {
    return (
        <div className="block block-footer">
           <div className="content">
               <div className="footer-row">
                   <div className="footer-column__text">
                       <p>Copyright © 2021 ООО «Линк Мьюзик»</p>
                       <p>Правовая информация: <a href="#">Пользовательское соглашение</a>, <a href="#">Политика конфиденциальности</a></p>
                   </div>
                   <div className="footer-column__links">
                       <a href="#" className="footer-column__link-item footer-column__link-item_1"></a>
                       <a href="#" className="footer-column__link-item footer-column__link-item_2"></a>
                       <a href="#" className="footer-column__link-item footer-column__link-item_3"></a>
                       <a href="#" className="footer-column__link-item footer-column__link-item_4"></a>
                       <a href="#" className="footer-column__link-item footer-column__link-item_5"></a>
                       <a href="#" className="footer-column__link-item footer-column__link-item_6"></a>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Footer;
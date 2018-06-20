import React, { Component } from "react";
import Flexbox from 'flexbox-react';

 const Footer = () => {
  return (
      <footer class="page-footer" >
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">EMAILY APP</h5>
              <p class="grey-text text-lighten-4">
                Emaily - Simple service to create a survey compain and send it to customers
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text"> </h5>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2018 D.BLOT
            <a class="grey-text text-lighten-4 right" href="#!">
              GMAIL
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

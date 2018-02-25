import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className='Contact'>
    <div id="content">

      <div className="content_wrap_outer">
        <div id="content_wrap">
          <div className="pagebuilder-wrap">
            <div className="fullwrap_moudle">

              <div className="row">

                <div className="fullwidth-wrap fullwidth-text-white">

                  <div className="fullwidth-wrap-inn">

                    <div className="row ">

                      <div className="col-md-12 col-sm-12 moudle bottom-space-no">

                        <div className="module-map-canvas" data-add="Corlears Hook Park" style={{height: '400px'}}
                             data-l="40.7116965" data-r="-73.97969720000003" data-zoom="17" data-pin="t" data-view="map"
                             data-dismouse="f" data-pin-custom="" data-style="t"></div>

                        <textarea className="form-control hidden module-map-style-code" rows="3"></textarea>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="container-fluid">

              <div className="row">

                <div className="col-md-12 col-sm-12 moudle bottom-space-40">

                  <div className="separator  without-title blank-divider height-80" data-animationend="fadeined">

                    <div className="separator_inn bg-" style={{top: '8px'}}></div>

                  </div>

                </div>

              </div>

            </div>
            <div className="container-fluid">

              <div className="row">

                <div className="col-md-6 col-sm-6 general_moudle">

                  <div className="row">


                    <div className="col-md-6 col-sm-6 moudle bottom-space-20">

                      <div className="text_block ux-mod-nobg" data-animationend="fadeined">
                        <p></p>
                        <h5>CONTACT INFO</h5>
                        <p></p>
                        <p></p>

                      </div>

                    </div>

                  </div>

                  <div className="row">


                    <div className="col-md-6 col-sm-6 moudle  bottom-space-no">

                      <div className="text_block ux-mod-nobg" data-animationend="fadeined">
                        <p>Te vix alii tritani electram. Te mel diam mucius mediocritatem. Sed in dicunt qualisque.
                          Mundi soleat mediocrem no quo, tempor mollis sea et.</p>
                        <p><br/></p>
                        <h6>Email Us</h6>
                        <p>hello@uiueux.com</p>
                        <p><br/></p>
                        <h6>Call Us</h6>
                        <p>+00 123 456 7890</p>
                        <p><br/></p>
                        <h6>Address Us</h6>
                        <p>001&nbsp;Madison Ave, New York, NY</p>
                      </div>
                    </div>

                  </div>

                </div>


                <div className="col-md-6 col-sm-6 general_moudle">


                  <div className="row">

                    <div className="col-md-6 col-sm-6 moudle  bottom-space-20">
                      <div className="text_block ux-mod-nobg  " data-animationend="fadeined">
                        <p></p>
                        <h5>GET IN TOUCH</h5>
                        <p></p><p></p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 moudle  bottom-space-no">
                      <div className="contactform ux-mod-nobg">
                        <form action="contact.php" id="contact-form" className="contact_form" method="POST">
                          <p className="span6"><input type="text" id="idi_name" name="idi_name"
                                                      className="requiredField" value="Name"
                                                      onBlur="if (this.value =='' ) {this.value = 'Name';}"
                                                      onFocus="if (this.value == 'Name' || this.value == 'Required' ) { this.value = ''; }"/>
                          </p>
                          <p className="span6"><input type="text" id="idi_mail" name="idi_mail"
                                                      className="requiredField email" value="Email"
                                                      onBlur="if (this.value =='' ) {this.value = 'Email';}"
                                                      onFocus="if (this.value == 'Email' || this.value  == 'Required' || this.value == 'Invalid email' ) {this.value = '';}"/>
                          </p>
                          <p><textarea rows="4" name="idi_text" id="idi_text" cols="4"
                                       className="requiredField inputError"
                                       onFocus="if(this.value==this.defaultValue|| this.value  == 'Required'){this.value='';}"
                                       onBlur="if(this.value==''){this.value=this.defaultValue;}">YOUR MESSAGE</textarea>
                          </p>
                          <input type="hidden" className="info-tip" value="send" name="contact_form"
                                 data-message="Done!" data-sending="Sending"
                                 data-error="Please Enter Correct Verification Number"/>
                          <div className="btnarea"><input type="submit" id="idi_send" name="idi_send" value="SEND"/>
                          </div>
                        </form>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
)

export default Contact

        

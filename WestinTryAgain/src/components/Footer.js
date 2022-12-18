import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="py-6 text-center">
            <div class="container">
                <div class="social-icon mb-3">
                    <ul class="list-inline py-2 mb-0">
                        <li class="list-inline-item"><a href="#"><img src="assets/img/facebook.svg" alt="/"/></a></li>
                        <li class="list-inline-item"><a href="#"><img src="assets/img/twitter.svg" alt="/"/></a></li>
                        <li class="list-inline-item"><a href="#"><img src="assets/img/github.svg" alt="/"/></a></li>
                        <li class="list-inline-item"><a href="#"><img src="assets/img/linkedin.svg" alt="/"/></a></li>
                        <li class="list-inline-item"><a href="#"><img src="assets/img/telegram.svg" alt="/"/></a></li>
                    </ul>
                </div>
                <p class="mb-0">Copyright © 2021. Template has been designed by <a class="base-color" href="#;">Retrina</a></p>
            </div>
        </footer>
        {/* <!--   Footer End  --> */}

        {/* <!--   Return To Top  --> */}
        <a class="return-to-top d-inline-block" href="javascript:void(0)"><i class="lni lni-arrow-up"></i></a>

        

        <div class="mouse-cursor cursor-effect"></div>
        <div class="mouse-cursor cursor"></div>
    </div>
  )
}

export default Footer

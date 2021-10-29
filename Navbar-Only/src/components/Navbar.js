function Navbar() {
  return `
  <nav id="navbar" class="bg-gray-700 text-gray-300">
        <div>
        <ul class="flex justify-center align-center xl:gap-9 lg:gap-7 md:gap-5">
          <li class="inline-block p-0">
            <a href="">
              <img
              class="bg-auto bg-center"
                src="https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                alt=""
              />
              <!-- <span >LOGO</span> -->
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span> Store </span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>Mac</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>iPad</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>iPhone</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>Watch</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>AirPods</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>TV & Home</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>Only on Apple</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>Accessories</span>
            </a>
          </li>
          <li class="inline-block p-2 hover:text-gray-400">
            <a href="">
              <span>Support</span>
            </a>
          </li>
          <li class="inline-block p-1">
            <a href="">
                <img class="bg-auto bg-center" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='44'%3E%3Cpath d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 001.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 01-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z' fill='%23999'/%3E%3C/svg%3E" alt="">
            </a>
          </li>
          <li class="inline-block p-1">
            <a href="">
                <img class="bg-auto bg-center" src="https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
      </nav>
        `;
}

export default Navbar;

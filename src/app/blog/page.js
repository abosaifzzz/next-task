import React from "react";

function Blog() {
  return (
    <>
      <div class="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
        <div class="bg-white w-9 h-9 rounded-full"></div>
        <ul class="list-none flex justify-between items-center">
          <a href="#" class="mr-5 hover:text-gray-300">
            <li class="list-none">Menu</li>
          </a>
          <a href="#" class="mr-5 hover:text-gray-300">
            <li class="list-none">Services</li>
          </a>
          <a href="#" class="mr-5 hover:text-gray-300">
            <li class="list-none">About Us</li>
          </a>
          <a
            href="#"
            class="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3"
          >
            <li class="list-none">Sign In</li>
          </a>
        </ul>
      </div>

      <div class="flex flex-col p-5 lg:px-48 lg:py-11">
        <div class="bg-gray-100 p-5 mb-10">
          <h1 class="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque
            a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima
            sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam
            excepturi doloribus ducimus voluptatibus numquam officiis expedita
            culpa hic sequi quasi reprehenderit iste obcaecati nostrum.
            Consequuntur aliquam, assumenda architecto animi veniam dolore
            dolor?
          </p>
          <button class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
            Read More...
          </button>
        </div>
        <div class="bg-gray-100 p-5 mb-10">
          <h1 class="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque
            a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima
            sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam
            excepturi doloribus ducimus voluptatibus numquam officiis expedita
            culpa hic sequi quasi reprehenderit iste obcaecati nostrum.
            Consequuntur aliquam, assumenda architecto animi veniam dolore
            dolor?
          </p>
          <button class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
            Read More...
          </button>
        </div>
        <div class="bg-gray-100 p-5 mb-10">
          <h1 class="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque
            a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima
            sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam
            excepturi doloribus ducimus voluptatibus numquam officiis expedita
            culpa hic sequi quasi reprehenderit iste obcaecati nostrum.
            Consequuntur aliquam, assumenda architecto animi veniam dolore
            dolor?
          </p>
          <button class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
            Read More...
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;

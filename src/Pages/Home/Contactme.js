import React from 'react';

const Contactme = () => {
    return (
      <div>
           <h2 className='text-3xl font-semibold text-white mt-20 text-center'>Contact Me</h2>
      <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-2xl font-bold text-white">Hey <span className='text-rose-600'>There</span></h1>
      <p class="py-6 text-xl text-gray-400">Inform me by sending message, if you think I can help you out with any of your web related projects.</p>
      <div>
         
      </div>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form action="https://formsubmit.co/mdhasanullah124@gmail.com" method="POST">
    <div class="card-body bg-zinc-900">
        <div class="form-control">
         
          <input type="text" name='name' placeholder="name" class="input bg-zinc-800 text-white input-bordered" />
        </div>
        <div class="form-control">
         
          <input type="email" name='email' placeholder="email" class="input input-bordered bg-zinc-800 text-white" />
          
        </div>
        <div class="form-control">
         
          <input type="text" name='message' placeholder="message" class="input input-bordered bg-zinc-800 text-white" />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-rose-500">Login</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
      </div>
    );
};

export default Contactme;
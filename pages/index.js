import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section
        id="home"
        className="text-white h-screen   flex ">
      
        <div className='relative md:top-36 top-52 left-10 md:left-28 w-9/12 md:w-2/5'>
          <h1 className=" text-7xl text-slate-950 font-bold  md:text-6xl">
          Welcome to the home of<br></br>
          </h1>
          <Link href='/'>
          <img src='../assets/group1.png' className='w-screen my-2 md:w-11/12 '></img></Link>
          <p className='text-zinc-700 w-full m-3 text-sm'>We are a team of aspiring engineers sharing a common interest in Technology.
Lorem ipsum dolor set amet.......</p>
          <button type="button" className='bg-blue-600 md:my-5  md:p-2 rounded-md my-3 p-2 '>Become a member</button>
          <button type="button" className='bg-white text-blue-600 border-2 border-blue-600 md:my-4 md:m-1 md:p-1.5 rounded-md my-3 p-1 m-2'>Learn More</button>
        
        
          </div>
          <img src='../assets/float.gif' className='relative left-40  max-md:hidden mix-blend-darken'></img>
        
      </section>
      <div className='w-screen h-8 bg-blue-600'>
        </div>
      <section id="about" className="  h-screen  flex">
        
        <div className='relative top-32  max-md:text-center left-4 md:left-28'>
          <h1 className="text-slate-950 md:text-5xl text-4xl">ABOUT GDSC, NMIT</h1>

          <div>
          <p className='w-2/6 h-40 py-10 text-gray-700'>Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. </p>

              <p className='w-2/6 h-40 py-6 text-gray-700'> By joining GDSC NMIT, students can grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their communities. This club is open to any student, ranging from novice developers who are just starting to advanced developers who want to further their skills.</p>
        </div>


        </div>
        
      </section>
      <section
        id="events"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Events
        </h1>
      </section>
      
    </div>
  );
}

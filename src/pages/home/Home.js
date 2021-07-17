import React from 'react';
import RoadMapCard from './RoadMapCard';

function Home() {
  return (
    <div>
      <br />
      <h2>Updates and new releases</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <RoadMapCard
          title='💇🏻‍♂️ Changed to make Base64 E/D easy'
          date='12 July 2021'
        >
          After taking suggestions, given a little makeover and modified working
          to make it easily understandable and relatable.
        </RoadMapCard>
        <RoadMapCard title='👨‍🎨 Patched Base64 paste button' date='2 July 2021'>
          As the paste functionality wasn't working in multiple browser except
          few brosers, I made it disapper if its not supported in the browser
          😅.
        </RoadMapCard>
        <RoadMapCard title='🪜 First step toward Base64' date='1 July 2021'>
          Created a first working version of new Base64 encoder and decoder tool
          🅱️6️⃣4️⃣, with paste functionality which will works best in chrome based
          browser😅.
        </RoadMapCard>
        <RoadMapCard
          title='🔧 Improvements in password generator'
          date='30 June 2021'
        >
          Included a nice alert when password is copied after clicking on text
          field.
        </RoadMapCard>
        <RoadMapCard title='🚀 First generation!!!' date='29 June 2021'>
          Completed the first iteration of the random password generator. It's
          not that flexible yet but it works and does what's required.
        </RoadMapCard>
        <RoadMapCard title='🤓 Learning by doing' date='28 June 2021'>
          Created updates/release section (section which you are looking at 😅)
          in home page to mention about upcomming changes and implemented
          features.🥳
        </RoadMapCard>
        <RoadMapCard title='🥇 First Update' date='27 June 2021'>
          Finally started to create this website. 😜
        </RoadMapCard>
      </div>
    </div>
  );
}

export default Home;

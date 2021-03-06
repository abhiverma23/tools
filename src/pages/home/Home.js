import React from 'react';
import RoadMapCard from './RoadMapCard';

function Home() {
  return (
    <div>
      <br />
      <h2>Updates and new releases</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <RoadMapCard title='πΌ Tuned alert box a bit' date='20 July 2021'>
          The alert box will now close after 5 seconds no matter what actions
          raised alerts previously within the last 5 seconds.
        </RoadMapCard>
        <RoadMapCard
          title='ππ»ββοΈ Changed to make Base64 E/D easy'
          date='12 July 2021'
        >
          After taking suggestions, given a little makeover and modified working
          to make it easily understandable and relatable.
        </RoadMapCard>
        <RoadMapCard title='π¨βπ¨ Patched Base64 paste button' date='2 July 2021'>
          As the paste functionality wasn't working in multiple browser except
          few brosers, I made it disapper if its not supported in the browser
          π.
        </RoadMapCard>
        <RoadMapCard title='πͺ First step toward Base64' date='1 July 2021'>
          Created a first working version of new Base64 encoder and decoder tool
          π±οΈ6οΈβ£4οΈβ£, with paste functionality which will works best in chrome based
          browserπ.
        </RoadMapCard>
        <RoadMapCard
          title='π§ Improvements in password generator'
          date='30 June 2021'
        >
          Included a nice alert when password is copied after clicking on text
          field.
        </RoadMapCard>
        <RoadMapCard title='π First generation!!!' date='29 June 2021'>
          Completed the first iteration of the random password generator. It's
          not that flexible yet but it works and does what's required.
        </RoadMapCard>
        <RoadMapCard title='π€ Learning by doing' date='28 June 2021'>
          Created updates/release section (section which you are looking at π)
          in home page to mention about upcomming changes and implemented
          features.π₯³
        </RoadMapCard>
        <RoadMapCard title='π₯ First Update' date='27 June 2021'>
          Finally started to create this website. π
        </RoadMapCard>
      </div>
    </div>
  );
}

export default Home;

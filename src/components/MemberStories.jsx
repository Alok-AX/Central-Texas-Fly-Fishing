import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const MemberStories = () => {
  
  const stories = [
    { id: 1, title: "John's Story", img: "/assets/images/story-1.png", desc: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh" },
    { id: 2, title: "The Journey", img: "/assets/images/story-2.png", desc: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc" },
    { id: 3, title: "Catch Day", img: "/assets/images/story-3.png", desc: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque" },
    { id: 4, title: "Trout Tales", img: "/assets/images/story-4.png", desc: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed" }
  ];
  return (
    <>
      {/* Large Screen Version */}
      <section className="member-stories member-stories-lg">
        <div className="container">
          <h2 style={{ fontSize: '48px' }}>Member Stories</h2>
          <div className="row">
            {stories.map((story) => (
              <div key={story.id} className="member-stories-col">
                <div className="story_box">
                  <img src={story.img} alt={story.title} />
                  <div className="story_box_content">
                    <h5 className="d-lg-block d-sm-none d-md-none">{story.title}</h5>
                    <p>{story.desc}</p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Screen Version */}
      <section className="member-stories member-stories-sm">
        <div className="container">
          <h2 style={{ fontSize: '48px' }}>Member Stories</h2>
          <div className="devider" style={{ marginTop: '24px' }}></div>
          {stories.map((story, index) => (
            <div key={story.id}>
              <div className="member-stories-col">
                <div className="story_box flex-column">
                  <h5 className="d-lg-none d-md-block d-sm-block">{story.title}</h5>
                  <div className="story_box_content d-flex gap-4">
                    <img src={story.img} alt={story.title} />
                    <p>{story.desc}</p>
                  </div>
                  <a href="#" className="btn btn-light mt-3">Read more</a>
                </div>
              </div>
              {index < stories.length - 0 && <div className="devider"></div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MemberStories;

import './VideoPlayer.css';

export default function VideoPlayer() {
   
      return (
        <div className="container-video">
          <video width="75%" height="500" autoPlay loop controls>
              <source src="https://v.ftcdn.net/04/19/53/82/240_F_419538256_W8YeOqLG376pkNr2SdL8AvThYXCmAywX_ST.mp4" type="video/mp4"/>
          </video>
        </div>
      );
  }
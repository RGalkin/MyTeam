import React from 'react';
import Gallery from 'react-native-image-gallery';




export default class PlayerGallery extends React.Component {

    render() {
        return (
          <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={[
              { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
              { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
              { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
              { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
            ]}
          />
        );
      }
}






import React from 'react';
import { View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri:props.album.thumbnail_image}}
          />
        </View>
        <View style={styles.textContainerStyle}>
          <Text style={styles.albumTitleStyle}>{ props.album.title }</Text>
          <Text>{ props.album.artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{uri:props.album.image}}
        />
      </CardSection>

      <CardSection>
        <Button clicked={() => Linking.openURL(props.album.url)}/>
      </CardSection>
    </Card>
  );
};
const styles={
  thumbnailStyle:{
    height:50,
    flex:1,
    width:null
  },
  textContainerStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  albumTitleStyle:{
    fontSize:20
  },
  thumbnailContainerStyle:{
    height:70,
    width:70,
    marginRight:10
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  }
};
export default AlbumDetails;

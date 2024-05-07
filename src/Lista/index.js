import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Lista extends Component {
  constructor(props){
	  super(props);
	  this.state = {
        feed: this.props.data
       };

       this.carregaIcone = this.carregaIcone.bind(this);
       this.mostrarLikes = this.mostrarLikes.bind(this);
       this.like = this.like.bind(this);
  }

  carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png')


  }
  
  like(){
    let feed = this.state.feed;

    if(feed.likeada === true){
        this.setState({
            feed:{
                ...feed,
                likeada: false,
                likers: feed.likers - 1
            }
        })
    }else{
        this.setState({
            feed:{
                ...feed,
                likeada: true,
                likers: feed.likers + 1
            }
        })
    }


  }

  mostrarLikes(likers){
    let feed = this.state.feed;

    if(feed.likers <=0){
        return;
    }

    return(
        <Text style={styles.likes}>
            {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
        </Text>
    )


  }

  render(){
    return (
      <View style={styles.areaFeed}>

        <View style={styles.viewPerfil}>
            <Image
            style={styles.fotoPerfil}
            source={{uri: this.state.feed.imgperfil}}
            />
            <Text style={styles.nomeUsuario}>
                {this.state.feed.nome}
            </Text>
        </View>

        <Image
            style={styles.fotoPublicacao}
            resizeMode='cover'
            source={{uri: this.state.feed.imgPublicacao}}
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                        style={styles.iconelike}
                        source={this.carregaIcone(this.state.feed.likeada)}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconesend}>
                    <Image
                        style={styles.iconelike}
                        source={require('../img/send.png')}
                    />
                </TouchableOpacity>
            </View>

            {this.mostrarLikes(this.state.feed.likers)}



            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>
                    {this.state.feed.nome}
                </Text>

                <Text style={styles.descRodape}>
                    {this.state.feed.descricao}
                </Text>

            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    viewPerfil:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    nomeUsuario:{
        fontSize: 20,
        textAlign: 'left',
        color: '#000000',

    },
    fotoPublicacao:{
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    
    areaBtn:{
        flexDirection: 'row',
        padding: 5

    },
    iconelike:{
        width: 33,
        height: 33
    },
    iconesend:{
        paddingLeft: 15
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    nomeRodape:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5

    },
    descRodape:{
        paddingLeft: 15,
        fontSize: 14,
        color: '#000'
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5

    }


});

export default Lista;
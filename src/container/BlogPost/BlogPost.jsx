import React, {Component} from 'react';
import './BlogPost.css';

class BlogPost extends Component{
    render(){
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                <div class="artikel">
                    <div class="gambar-artikel">
                        <img src="http://placeimg.com " alt="Gambar Thumbnail Artikel"/>
                    </div>
                    <div class="konten-artikel">
                        <div class="judul-artikel">Judul Artikel</div>
                        <p class="list-artikel">Isi Artikel</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;
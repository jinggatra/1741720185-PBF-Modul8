import React from 'react';

const Post = (props) =>{
    return(
        <div class="artikel">
            <div class="gambar-artikel">
                <img src="http://placeimg.com " alt="Gambar Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">Judul Artikel</div>
                <p className="isi-artikel">Isi Artikel</p>
            </div>
        </div>
    )
}

export default Post;
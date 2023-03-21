import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFreature.propTypes = {

};

function AlbumFreature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbailUrl: 'https://i.ytimg.com/vi/hUoOGSLmDHg/maxresdefault.jpg'
        },
        {
            id: 2,
            name: 'TOP 40 Bài Hát Nhạc Trẻ Hàng',
            thumbailUrl: 'https://i.ytimg.com/vi/qttYIDwXyG0/maxresdefault.jpg'
        },
        {
            id: 3,
            name: 'Liên Khúc Nhạc Trẻ Tuyển Chọn',
            thumbailUrl: 'https://i.ytimg.com/vi/-czSooyGZds/maxresdefault.jpg'
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />

        </div>
    );
}

export default AlbumFreature;
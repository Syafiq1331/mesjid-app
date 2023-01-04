import React from 'react';

//import layout
import Hadits from './Alamat';
import Date from './Date';
import Jadwal from './Jadwal';
import JadwalKajian from './JadwalKajian';

export default function PostIndex({ posts, session }) {
    return (
        <>
            <div className="container mx-auto flex flex-wrap my-12 justify-between">
                <Date />
                <JadwalKajian />
            </div>
        </>
    )
}

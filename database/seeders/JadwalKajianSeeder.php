<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JadwalKajian;

class JadwalKajianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JadwalKajian::create([
            'nama' => 'Kajian Jumat',
            'tempat' => 'Masjid Al-Muhajirin',
            'pemateri' => 'Ustadz Abdul Somad',
            'tanggal' => '2021-12-31',
            'jam' => '19:00',
            'keterangan' => 'Kajian rutin setiap jumat',
        ],
        [
            'nama' => 'Kajian Jumat',
            'tempat' => 'Masjid Al-Wahhab',
            'pemateri' => 'Ustadz Abdul Kareem',
            'tanggal' => '2022-01-07',
            'jam' => '19:00',
            'keterangan' => 'Kajian rutin setiap jumat',
        ]);
    }
}

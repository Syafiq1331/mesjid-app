<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JadwalKajian;

class JadwalKajianController extends Controller
{
    public function index()
    {
        $jadwal_kajian = JadwalKajian::all();
        return view('jadwal_kajian.index', compact('jadwal_kajian'));
    }

    public function create()
    {
        return view('jadwal_kajian.create');
    }

    public function store(Request $request)
    {
        JadwalKajian::create($request->all());
        return redirect()->route('jadwal_kajian.index');
    }

    public function show(JadwalKajian $jadwal_kajian)
    {
        return view('jadwal_kajian.show', compact('jadwal_kajian'));
    }

    public function edit(JadwalKajian $jadwal_kajian)
    {
        return view('jadwal_kajian.edit', compact('jadwal_kajian'));
    }

    public function update(Request $request, JadwalKajian $jadwal_kajian)
    {
        $jadwal_kajian->update($request->all());
        return redirect()->route('jadwal_kajian.index');
    }

    public function destroy(JadwalKajian $jadwal_kajian)
    {
        $jadwal_kajian->delete();
        return redirect()->route('jadwal_kajian.index');
    }
}

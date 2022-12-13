<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get all posts
        $posts = Post::latest()->get();

        //return view
        return inertia('Posts/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * create
     *
     * @return void
     */
    public function create()
    {
        //return view
        return inertia('Posts/Create');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */

    public function store(Request $request)
    {
        //validate
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        //create post
        Post::create([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        //redirect
        return redirect()->route('posts.index')->with('success', 'Post created successfully');
    }

    /**
     * edit
     *
     * @param  mixed $post
     * @return void
     */
    public function edit(Post $post)
    {
        //return view
        return inertia('Posts/Edit', [
            'post' => $post
        ]);
    }

    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $post
     * @return void
     */
    public function update(Request $request, Post $post)
    {
        //validate
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        //update post
        $post->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        //redirect
        return redirect()->route('posts.index')->with('success', 'Post updated successfully');
    }

    /**
     * destroy
     *
     * @param  mixed $post
     * @return void
     */
    public function destroy(Post $post)
    {
        //delete post
        $post->delete();

        //redirect
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully');
    }
}

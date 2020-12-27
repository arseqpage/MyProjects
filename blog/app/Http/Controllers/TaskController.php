<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();
        return view('tasks', compact('tasks'));
    }

    public function create()
    {
        return view('create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:10',
            'description' => 'required|string|max:255'
        ]);

        Task::create($request->all());

        return redirect('/')->with('message', 'таск был создан успешно');
    }

    public function delete(Task $id)
    {
        $id->delete();
        return redirect('/')->with('message', 'таск был успешно удален');
    }
}

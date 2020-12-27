@extends('layouts.app')
@section('content')
@if ($message = Session::get('message'))
<div class="alert alert-success alert-block">
  <button type="button" class="close" data-dismiss="alert">×</button>
  <strong>{{ $message }}</strong>
</div>
@endif
@if(!$tasks->isEmpty())
<div class="list-group">
  @foreach ($tasks as $task)
  <form action="{{route('delete', ['id' => $task->id])}}" method="post">
    @csrf
    <a class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ $task->name }}</h5>
        <small>{{ $task->created_at->diffForHumans() }}</small>
      </div>
      <p>{{ $task->description }}</p>
      <button type="submit">Удалить</button>
    </a>
  </form>
  @endforeach
</div>
@else
<div class="alert alert-warning">Нету задач</div>
@endif
@endsection
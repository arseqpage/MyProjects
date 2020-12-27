@extends('layouts.app')
@section('content')

@if ($errors->any())
<div class="alert alert-danger">
  <ul>
    @foreach ($errors->all() as $error)
    <li>{{ $error }}</li>
    @endforeach
  </ul>
</div>
@endif

<form action="{{route('save')}}" method="POST">
  @csrf
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Название задачи</label>
    <input type="text" class="form-control" name="name" id="exampleFormControlInput1">
    @error('name')
    <div class="invalid-feedback">
      {{$message}}
    </div>
    @enderror
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Описание задачи</label>
    <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
    @error('description')
    <div class="invalid-feedback">
      {{$message}}
    </div>
    @enderror
  </div>
  <button class="btn btn-primary" type="submit">Отправить</button>
</form>

@endsection
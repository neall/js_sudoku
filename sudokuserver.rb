#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  @title = 'Sudoku Board'
  @board = [
    [nil,   6,   1,      3,   8,   9,      4, nil, nil],
    [  3,   9,   5,    nil, nil, nil,      2, nil, nil],
    [  7, nil, nil,    nil, nil,   1,      6, nil, nil],

    [nil, nil, nil,    nil,   9,   3,      5, nil, nil],
    [nil,   3, nil,      6, nil,   4,    nil,   1, nil],
    [nil, nil,   9,      8,   5, nil,    nil, nil, nil],

    [nil, nil,   8,      2, nil, nil,    nil, nil,   6],
    [nil, nil,   6,    nil, nil, nil,      8,   5,   9],
    [nil, nil,   3,      9,   6,   8,      1,   2, nil]
  ]
  haml :board
end

get '/main.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :main
end

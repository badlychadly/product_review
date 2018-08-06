Rails.application.routes.draw do

  root 'static#welcome'
  
  resources :products do
    resources :reviews, except: [:new]
    member do
      put "like", to: "products#upvote"
      put "dislike", to: "products#downvote"
    end
  end 

  
  
  


  resources :users, except: [:new, :create]
   
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'

  get '/auth/amazon/callback' => 'sessions#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end



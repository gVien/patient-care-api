require "api_constraints" # see path lib/

Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # api namespace & versioning
  namespace :api, defaults: {format: :json } do

    # This creates a custom media `application/vnd.patientcare.v1` which we can choose
    # the versioning of the API in the Accept header similar to how Github does it
    # https://developer.github.com/v3/media/ which follows best practices
    # scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
    #   resources :providers, only: [:index, :show, :create, :update, :destroy]
    # end

    # for simplicity, let's use v1 in our url
    namespace :v1 do
      resources :providers, only: [:index, :show, :create, :update, :destroy]
    end
  end

  # You can have the root of your site routed with "root"
  root to: redirect("/api/v1/providers")

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

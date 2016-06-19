module Api
  module V1
    class ProvidersController < ApplicationController
      # get the provider from the URL before performing these actions
      before_action :get_provider, only: [:show, :update, :destroy]

      # GET /api/v1/providers
      def index
        render json: Provider.all, status: 200
      end

      # GET /api/v1/providers/:id
      def show
        if @provider
          render json: @provider, status: 200
        else
          render json: { error: "Provider not found" }, status: 404 # not found
        end
      end

      # POST /api/v1/providers
      def create
        provider = Provider.new(provider_params)
        if provider.save
          render json: {provider: provider, message: "Provider created successfully"}, status: 201  # created status
        else
          render json: { error: "Validation Failed" }, status: 422 # Unprocessable Entity status
        end
      end

      # PUT /api/v1/providers/:id
      def update
        if @provider
          @provider.update_attributes(provider_params)
          render json: @provider, status: 201
        else
          render json: { error: "Validation Failed" }, status: 422
        end
      end

      # DELETE /api/v1/providers/:id
      def destroy
        if @provider
          @provider.destroy
          render json: :nothing, status: 204  # no content status
        else
          render json: { error: "Provider not found"  }, status: 404
        end
      end

      private
        def provider_params
          params.require(:provider).permit(:name, :location, :phone_number, :provides => [])
        end

        # returns provider if found, otherwise return nothing
        def get_provider
          @provider = Provider.find_by(id: params[:id])
        end
    end
  end
end
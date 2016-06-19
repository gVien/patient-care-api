module Api
  module V1
    class ProvidersController < ApplicationController
      # GET /api/v1/providers
      def index
        render json: Provider.all, status: 200
      end

      # GET /api/v1/providers/:id
      def show
        provider = Provider.find(params[:id])
        if provider
          render json: provider, status: 200
        else
          render json: {message: "Provider not found"}, status: 404 # not found
        end
      end

      # POST /api/v1/providers
      def create
        provider = Provider.new(provider_params)
        if provider.save
          render json: {provider: provider, message: "Provider created successfully"}, status: 201  # created status
        else
          render json: { message: "Validation Failed"}, status: 422 # Unprocessable Entity status
        end
      end

      # PUT /api/v1/providers/:id
      def update
        provider = Provider.find(params[:id])
        if provider
          provider.update_attributes(provider_params)
          render json: provider, status: 201
        else
          render json: { message: "Validation Failed"}, status: 422
        end
      end

      # DELETE /api/v1/providers/:id
      def destroy
        provider = Provider.find(params[:id])
        if provider
          provider.destroy
          render :nothing, status: 402
        else
          render json: { message: "Provider not found" }, status: 404
        end
      end

      private
        def provider_params
          params.require(:provider).permit(:name, :location, :phone_number, :provides => [])
        end
    end
  end
end
class ApiConstraints
  def initialize(options)
    @version = options[:version]
    @default = options[:default]
  end

  # check if it's default version or  request headers accept the version string
  def matches?(request)
    @default || request.headers["Accept"].include?("application/vnd.patientcare.v#{@version}")
  end
end
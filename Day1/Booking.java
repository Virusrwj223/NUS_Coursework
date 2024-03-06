class Booking implements Comparable<Booking> {
  
  private Car car;
  private Services service;
  private Request request;

  public Booking(Car car, Services service, Request request) {
    this.car = car;
    this.service = service;
    this.request = request;
    this.service.computeFare(request);
    if (!this.car.isServiceProvided(this.service)) {
      String message = this.car.toString() + " does not provide the "
        + this.service.toString() +" service.";
      throw new IllegalArgumentException(message);
    }
  }

  @Override
  public int compareTo(Booking b) throws IllegalArgumentException{

    if (this.service.compareTo(b.service) == 0) {
      return this.car.compareTo(b.car);
    } else {
      return this.service.compareTo(b.service);
    }
  }
}

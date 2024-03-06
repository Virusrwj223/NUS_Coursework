class Cab extends Car {

  public Cab(String licensePlate, int time) {
    super(licensePlate, time);
  }

  @Override 
  public String toString() {
    return "Cab " + super.toString();
  }

  @Override
  public boolean isServiceProvided(Services s) {
    return s.toString() == "JustRide" || s.toString() == "TakeACab";
  }
}

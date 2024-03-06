abstract class Car implements Comparable<Car> {
  String licensePlate;
  Integer time;

  abstract public boolean isServiceProvided(Services s);

  public Car(String licensePlate, int time) {
    this.licensePlate = licensePlate;
    this.time = time;
  }

  @Override
  public String toString() {
    if (this.time == 1) {
      return this.licensePlate + " (" + this.time + " min away)";
    } else {
      return this.licensePlate + " (" + this.time + " mins away)";
    }
  }

  @Override
  public int compareTo(Car c) {
    return this.time.compareTo(c.time);
  }
}

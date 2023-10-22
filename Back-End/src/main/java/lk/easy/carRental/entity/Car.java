package lk.easy.carRental.entity;

import lk.easy.carRental.embedded.Mileage;
import lk.easy.carRental.embedded.PriceRate;
import lk.easy.carRental.embedded.VehicleImage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String carId;
    private String registerNum;
    private String brand;
    private String type;
    @Embedded
    private PriceRate priceRate;
    @Embedded
    private Mileage freeMileage;
    private String color;
    private String transmissionType;
    private int numOfPassengers;
    private String fuelType;
    private double pricePerExtraKM;
    private double lossDamageWaiver;
    private double lastServiceMileage;
    @Embedded
    private VehicleImage vehicleImages;
    private String availabilityType;
}

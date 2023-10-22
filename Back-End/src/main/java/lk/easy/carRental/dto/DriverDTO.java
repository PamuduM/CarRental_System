package lk.easy.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverId;

    private String name;

    private String address;

    private String contactNumber;

    private String nic;

    private String licenseNo;

    private String licenseImage;

    private String availabilityType;

    private User_credentialsDTO user_credentials;
}

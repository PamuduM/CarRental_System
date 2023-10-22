package lk.easy.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class AdminDTO {
    private String adminNic;
    private String adminName;
    private String contactNumber;
    private String email;
    private User_credentialsDTO user_credentials;
}

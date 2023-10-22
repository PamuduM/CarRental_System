package lk.easy.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentId;
    private String paymentType;
    private LocalDate paymentDate;
    private LocalTime paymentTime;
    private double amount;
    private double cash;
    private double balance;
    private RentDTO rent;
}

package com.CEdev.skylight.service.interfac;

import com.CEdev.skylight.dto.Response;
import com.CEdev.skylight.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}

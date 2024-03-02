import datetime 
#24hr time
def alarm(set_time):

#     def calc_time_diff(time1,time2):
#         if time2 < time1:
#             time2 += 24 
#         return time2 - time1 
# #bc if the set time is earlier than the current time it will have to adjust for a full day??

#     current_time = datetime.datetime.now()
#     times = [current_time.hour, current_time.minute]

    current_time = datetime.datetime.now().strftime("%H:%M")
    times = [int(current_time[0:2]),int(current_time[3::])]
    if times[1] < 15 or times[1] >= 45:
        if times[1] >= 45:
            times[0] += 1
        times[1] = 0
        
    elif times[1] >= 15 and times[1] < 45:
        times[1] = 30
    times[0] = times[0] % 24
    
    REM_interval = 1.5
    roundedTime = [0,0]
    
    if set_time[1] < 15 or set_time[1] >= 45:
        if set_time[1] >= 45:
            roundedTime[0] = set_time[0] + 1
        else:
            roundedTime[0] = set_time[0]
        roundedTime[1] = 0
        
    elif set_time[1] >= 15 and set_time[1] < 45:
        roundedTime[0] = set_time[0]
        roundedTime[1] = 30
    
    roundedTime[0] = roundedTime[0] % 24

    Diff = calc_time_diff(times[0]+times[1]/60,roundedTime[0]+roundedTime[1]/60)
    cycles = Diff / REM_interval    #cycles = round(Diff / REM_interval)
    cycles = round(cycles)
    timeToAdd = cycles * 1.5
    times[0] += timeToAdd // 1
    times[1] += timeToAdd % 1
    times[0] %= 24
    print(times)

#     times[0] += int(timeToAdd) timeToAdd // 1 same thing???
#     times[1] += (timeToAdd % 1) * 60 #calculates the ratio to minutes and adds to the time (i think)
#     times[0] += times[1] // 60 #so then if the addition crosses 60 it gets adjusted
#     times[1] %= 60
#     times[0] %= 24

def calc_time_diff(time1,time2):
    i = 0
    while time1 != time2:
        time1 += 0.5
        time1 %= 24
        i += 0.5
    return i

    # if time2 < time1:
    #     diff = (24-time1) + time2 #time1 --> mn, mn--> time2
    # else:
    #     diff = time2-time1 # if just later on in same day
    # return diff



alarm([17,30])

# dont know if it will workkkk

# def water_consumption(amount):
#     water_drunk = 0
#     glasses = 240
#     #ml - l
#     ml = glasses * amount
#     water_drunk += ml

#     litre = water_drunk / 1000
#     print("You have drunk approximately " + litre + " of water!")
#     left_to_drink = 2 - litre
#     print("You should drink " + left_to_drink + " more water")

#     #EXTRA
#     # if woman --> approx: 2L
#     w_approx = 2
#     #if man --> approx: 2.6L
#     m_approx = 2.6
#     if litre >= _approx:
#         print("Yay! You have had the recommended amount of water for today!")
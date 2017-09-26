var library = (function () {
	return {
		TimeStamp: (function () {
			return {
				UnixTimestamp: function () {
					return new Date().getTime().toString() / 1000;
				},
				UnixMillisecond: function () {
					return new Date().getTime();
				}
			}
		})(),
		Local: (function () {
			return {
				Time: (function () {
					return {
						WithSeconds: function () {
							return new Date().toLocaleTimeString();
						},
						WithOutSeconds: function () {
							return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
						}
					}
				})(),
				MDY: (function () {
					return {
						Numeral: function () {
							return new Date().toLocaleDateString();
						},
						Name: function () {
							return new Date().toLocaleDateString([], {
								month: "long",
								day: "numeric", year: "numeric"
							});
						}
					}
				})(),
			}
		})(),
		Second: (function () {
			return {
				Second: function () {
					return new Date().getSeconds().toString();
					//return new Date().setSeconds(secondsValue);
				},
				DblDigit: function () {
					return new Date().getSeconds().toString();
				}
			}
		}()),
		Minute: (function () {
			return {
				Minute: function () {
					return new Date().getMinutes().toString();
				},
				DblDigit: function () {
					return new Date().getMinutes().toString();
				}
			}
		})(),
		Hour: (function () {
			return {
				TwentyFourHour: function () {
					return new Date().getHours(24).toString();
				},
				TwelveHour: function () {
					return new Date().getHours(12).toString();
				},
				AMPM: (function () {
					return {
						UpperCase: function () {
							return new Date(); //---------------------------						 },
						},
						LowerCase: function () {
							return new Date(); //----------------------------
						}
					}
				})()
			}
		})(),
		Week: (function () {
			return {
				DayOfWeek: function () {
					return new Date().getDay(name).toString(); //---------------------------
				},
				AbrDayOfWeek: function () {
					return new Date() //-----------------------------
				},
				FirstTwoOfWeek: function () {
					return new Date() //------------------------------------
				},
				WeekOfYear: function () {
					return new Date() //------------------------------------------
				}
			}
		})(),
		Month: (function () {
			return {
				DateOfMonth: function () {
				},
				Numeral: function () {
					return new Date();
				},
				Ordinal: function () {
					return new Date();
				},
				DateDblDigit: function () {
					return new Date();
				}
			}
		})(),
		MonthNumber: function () { },
		MonthNumberDblDigit: function () { },
		AbrOfCurrentMonth: function () { },
		CurrentMonth: function () { }
	}
})(),
	Year: (function() {
		return {
			DayOfYear: function () {
				return new Date();
			},
				Numeral: function() {
					return new Date();
				},
				Ordinal: function() {
					return new Date();
				},
				YearFull: function () {
					return new Date();
				},
				YearAbr: function () {
					return new Date();
				}
			}
		},
		Defaults: function() {}
	}
})();
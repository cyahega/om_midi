/**
 * MIDI 文件格式类型。
 */
enum MidiFormatType {
	/**
	 * MIDI 文件只有一条轨道，所有的通道都在一条轨道中。
	 */
	SINGLE_TRACK,
	/**
	 * MIDI 文件有多个音轨，并且是同步的，即所有的轨道同时播放。
	 */
	SYNC_MULTI_TRACK,
	/**
	 * MIDI 文件有多个音轨，不同步。
	 */
	ASYNC_MULTI_TRACK,
}

export enum MetaEventType {
	// 结束
	END_OF_TRACK = 0x2F,
	END_OF_FILE = -1,
	
	// 读字符串
	TEXT_EVENT = 0x01,
	COPYRIGHT_NOTICE = 0x02,
	TRACK_NAME = 0x03,
	INSTRUMENT_NAME = 0x04,
	LYRICS = 0x05,
	MARKER = 0x06,
	CUE_POINT = 0x07,
	
	// 读一位数字
	MIDI_PORT = 0x21,
	MIDI_PORT_2 = 0x20, // 两个版本？
	SET_TEMPO = 0x51,
	KEY_SIGNATURE = 0x59,
	
	SMPTE_OFFSET = 0x54,
	TIME_SIGNATURE = 0x58,
	SEQUENCER_SPECIFIC = 0x7F,
}

export enum RegularEventType {
	SYSTEM_EXCLUSIVE_EVENTS = 0xF,
	NOTE_AFTERTOUCH = 0xA,
	CONTROLLER = 0xB,
	PITCH_BEND_EVENT = 0xE,
	NOTE_OFF = 0x8,
	NOTE_ON = 0x9,
	PROGRAM_CHANGE = 0xC,
	CHANNEL_AFTERTOUCH = 0xD,
	END_OF_FILE = -1,
}

export enum ControllerType {
	BANK_SELECT = 0x00,
	MODULATION = 0x01,
	BREATH_CONTROLLER = 0x02,
	FOOT_CONTROLLER = 0x04,
	PORTAMENTO_TIME = 0x05,
	DATA_ENTRY = 0x06,
	MAIN_VOLUME = 0x07,
	BALANCE = 0x08,
	PAN = 0x0A,
	EXPRESSION_CONTROLLER = 0x0B,
	EFFECT_CONTROL_1 = 0x0C,
	EFFECT_CONTROL_2 = 0x0D,
	GENERAL_PURPOSE_CONTROLLERS_1 = 0x10,
	GENERAL_PURPOSE_CONTROLLERS_2 = 0x11,
	GENERAL_PURPOSE_CONTROLLERS_3 = 0x12,
	GENERAL_PURPOSE_CONTROLLERS_4 = 0x13,
	LSB_FOR_CONTROLLERS_0 = 0x20,
	LSB_FOR_CONTROLLERS_1 = 0x21,
	LSB_FOR_CONTROLLERS_2 = 0x22,
	LSB_FOR_CONTROLLERS_3 = 0x23,
	LSB_FOR_CONTROLLERS_4 = 0x24,
	LSB_FOR_CONTROLLERS_5 = 0x25,
	LSB_FOR_CONTROLLERS_6 = 0x26,
	LSB_FOR_CONTROLLERS_7 = 0x27,
	LSB_FOR_CONTROLLERS_8 = 0x28,
	LSB_FOR_CONTROLLERS_9 = 0x29,
	LSB_FOR_CONTROLLERS_10 = 0x2A,
	LSB_FOR_CONTROLLERS_11 = 0x2B,
	LSB_FOR_CONTROLLERS_12 = 0x2C,
	LSB_FOR_CONTROLLERS_13 = 0x2D,
	LSB_FOR_CONTROLLERS_14 = 0x2E,
	LSB_FOR_CONTROLLERS_15 = 0x2F,
	LSB_FOR_CONTROLLERS_16 = 0x30,
	LSB_FOR_CONTROLLERS_17 = 0x31,
	LSB_FOR_CONTROLLERS_18 = 0x32,
	LSB_FOR_CONTROLLERS_19 = 0x33,
	LSB_FOR_CONTROLLERS_20 = 0x34,
	LSB_FOR_CONTROLLERS_21 = 0x35,
	LSB_FOR_CONTROLLERS_22 = 0x36,
	LSB_FOR_CONTROLLERS_23 = 0x37,
	LSB_FOR_CONTROLLERS_24 = 0x38,
	LSB_FOR_CONTROLLERS_25 = 0x39,
	LSB_FOR_CONTROLLERS_26 = 0x3A,
	LSB_FOR_CONTROLLERS_27 = 0x3B,
	LSB_FOR_CONTROLLERS_28 = 0x3C,
	LSB_FOR_CONTROLLERS_29 = 0x3D,
	LSB_FOR_CONTROLLERS_30 = 0x3E,
	LSB_FOR_CONTROLLERS_31 = 0x3F,
	DAMPER_PEDAL = 0x40,
	PORTAMENTO = 0x41,
	SOSTENUTO = 0x42,
	SOFT_PEDAL = 0x43,
	LEGATO_FOOTSWITCH = 0x44,
	HOLD_2 = 0x45,
	SOUND_CONTROLLER_1 = 0x46,
	SOUND_CONTROLLER_2 = 0x47,
	SOUND_CONTROLLER_3 = 0x48,
	SOUND_CONTROLLER_4 = 0x49,
	SOUND_CONTROLLER_5 = 0x4A,
	SOUND_CONTROLLER_6 = 0x4B,
	SOUND_CONTROLLER_7 = 0x4C,
	SOUND_CONTROLLER_8 = 0x4D,
	SOUND_CONTROLLER_9 = 0x4E,
	SOUND_CONTROLLER_10 = 0x4F,
	GENERAL_PURPOSE_CONTROLLERS_5 = 0x50,
	GENERAL_PURPOSE_CONTROLLERS_6 = 0x51,
	GENERAL_PURPOSE_CONTROLLERS_7 = 0x52,
	GENERAL_PURPOSE_CONTROLLERS_8 = 0x53,
	PORTAMENTO_CONTROL = 0x54,
	EFFECTS_1_DEPTH = 0x5B,
	EFFECTS_2_DEPTH = 0x5C,
	EFFECTS_3_DEPTH = 0x5D,
	EFFECTS_4_DEPTH = 0x5E,
	EFFECTS_5_DEPTH = 0x5F,
	DATA_INCREMENT = 0x60,
	DATA_DECREMENT = 0x61,
	NON_REGISTERED_PARAMETER_NUMBER_LSB = 0x62,
	NON_REGISTERED_PARAMETER_NUMBER_MSB = 0x63,
	REGISTERED_PARAMETER_NUMBER_LSB = 0x64,
	REGISTERED_PARAMETER_NUMBER_MSB = 0x65,
	MODE_MESSAGES_1 = 0x79,
	MODE_MESSAGES_2 = 0x7A,
	MODE_MESSAGES_3 = 0x7B,
	MODE_MESSAGES_4 = 0x7C,
	MODE_MESSAGES_5 = 0x7D,
	MODE_MESSAGES_6 = 0x7E,
	MODE_MESSAGES_7 = 0x7F,
}

export default MidiFormatType;


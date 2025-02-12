import SChinese from "./SChinese";

const Vietnamese: typeof SChinese = {
	__translator__: "Cyahega",
	ok: "OK",
	cancel: "Hủy",
	channel_abbr: "CH",
	error: "Lỗi",
	warning: "Cảnh báo",
	apply: "Áp dụng",
	settings: "Cài đặt",
	select_all: "Chọn tất cả",
	channel: "Channel",
	name: "Tên",
	note_count: "Số nốt đếm được",
	language: "Ngôn ngữ",
	general: "Chung",
	app_default: "Mặc định ứng dụng",
	tools: "Công cụ",
	create_null_object_short: "Các thông số",
	create_null_object: "Tạo vật thể trống",
	apply_effects_short: "Hiệu ứng",
	apply_effects: "Áp dụng hiệu ứng",
	marker_conductor: "Thêm điểm đánh dấu",
	easing_100_percent: "Easing 100%",
	unit: "Đơn vị",
	time: "Thời gian",
	frames: "Khung hình",
	seconds: "Giây",
	beat: "Beat",
	shift_seconds_and_frames: "Thay đổi giây và khung hình",
	mark_on: "Đánh dấu",
	add_null_layer: "Thêm layer trống",
	current_layer: "Layer hiện tại",
	ease_in: "Ease in",
	ease_out: "Ease out",
	ease_in_out: "Ease in out",
	midi_track_selector_title: "Chọn MIDI track",
	select_at_least_one_track: "Vui lòng chọn ít nhất một track.",
	no_midi_file_selected: "Không có tệp MIDI được chọn",
	select_midi_file: "MIDI",
	select_midi_track: "Track",
	set_midi_bpm: "BPM",
	start_time: "Thời gian bắt đầu",
	display_start_time: "Thời gian bắt đầu hiển thị",
	current_time: "Thời gian hiện tại",
	work_area: "Khu vực làm việc",
	select_a_midi_file: "Chọn một trình tự MIDI",
	midi_files: "Trình tự MIDI",
	all_files: "Tất cả tệp",
	check_update: "Kiểm tra bản cập nhật",
	repository_link: "Link đến lưu trữ",
	about_script_engine: "Về ExtendScript engine",
	import_om_utils: "Nhập om utils",
	import_pure_quarter_midi: "Nhập MIDI quý thuần túy",
	using_selected_layer_name: "Sử dụng tên layer đã chọn thay vì tên track MIDI",
	normalize_pan_to_100: "Normalize pan từ -100 ~ 100",
	using_layering: "Phương pháp layering độc nhất của @Băng Cưu Anh Nãi　",
	optimize_apply_effects: "Bật visual motion cho một số hiệu ứng",
	add_to_effect_transform: "Thêm các thuộc tính vào một hiệu ứng gọi là Transform",
	sure_to_import_pure_quarter_midi: "Bạn có chắc chắn muốn nhập nốt tệp MIDI quý thuần túy không?",
	pure_quarter_midi: "Nốt MIDI quý thuần túy",
	add_at_top_of_expression: "Thêm vào biểu thức",
	om_utils_same_as_project_directory: "Nếu được đặt trong cùng thư mục với project aep",
	om_utils_added_to_project: "Nếu được đặt vào bất cứ đâu, và sau đó thêm vào project AE",
	pitch: "Cao độ (pitch)",
	velocity: "Velocity",
	duration: "Thời lượng",
	scale: "Tỉ lệ",
	cw_rotation: "Xoay theo chiều kim đồng hồ",
	ccw_ratation: "Xoay ngược chiều kim đồng hồ",
	count: "Đếm",
	bool: "Bool",
	time_remap: "Sắp xếp lại thời gian",
	pingpong: "Ping-pong",
	note_on: "Note On",
	channel_pan: "Pan Channel",
	channel_volume: "Âm lượng Channel",
	channel_glide: "Lướt Channel",
	horizontal_flip: "Lật ngang",
	invert_color: "Đảo ngược màu",
	tuning: "Tuning",
	base_pitch: "pitch ban đầu",
	paren_stretched: " (Đã kéo dãn)",
	paren_truncated: " (Đã cắt ngắn)",
	cannot_find_window_error: "Lỗi: Không thể tìm kiếm hoặc tạo cửa sổ",
	unsupported_setting_type_error: "Lỗi: Loại dữ liệu cài đặt này không hỗ trợ .",
	file_unreadable_error: "Lỗi: Không thể đọc tệp MIDI. Tệp có thể đã bị chiếm dụng hoặc không tồn tại.",
	midi_header_validation_error: "Lỗi: Xác thực khối tiêu đề tệp MIDI không thành công (không phải tệp MIDI tiêu chuẩn hoặc tệp này bị hỏng).",
	midi_track_header_validation_error: "Lỗi: Xác thực khối tiêu đề tệp MIDI không thành công.",
	midi_custom_events_error: "Lỗi: MIDI event tùy chỉnh không thể đọc được.",
	midi_no_track_error: "Lỗi: Tệp MIDI không có track nào hợp lệ",
	not_after_effects_error: "Lỗi: Vui lòng sử dụng script tại Adobe After Effects.",
	cannot_create_file_error: "Lỗi: Không thể tạo tệp",
	cannot_find_composition_error: "Lỗi: Không thể tìm được một composition còn hoạt động. Vui lòng kích hoạt composition trước .\n\nGiải pháp: Mở một composition trước, sau đó click vào composite preview hoặc track window để khiến nó hoạt động.",
	no_midi_error: "Lỗi: Vui lòng mở một tệp MIDI hợp lệ trước.",
	no_options_checked_error: "Lỗi: Vui lòng chọn ít nhất 1 tùy chọn.",
	no_layer_selected_error: "Lỗi: Không có layer nào được chọn trong composition hiện tại.",
	not_one_track_for_apply_effects_only_error: "Lỗi: Áp dụng hiệu ứng chỉ có thể chọn một track MIDI cùng một lúc.",
	end_of_track_position_error: "Lỗi: Track kết thúc ở sai vị trí. Dự kiến ​​1%, thực tế 2%.",
	cannot_set_time_remap_error: "Lỗi: Sắp xếp lại thời gian không thể đặt cho layer được chọn.",
	cannot_tuning_error: "Lỗi: Layer đã chọn không chứa âm thanh nên không thể tune được.",
	about: "Nó đọc một tệp trình tự MIDI tiêu chuẩn và tạo các layer cũng như khung hình chính tương ứng với các nốt và bộ điều khiển trong tệp trình tự MIDI đó.\n\nPhiên bản: %4\nỨng dụng: %2\nXác định phiên bản: %3\n\nTác giả gốc: David Van Brink (omino), Dora (NGDXW), Gia Miết Thái Đâ\nTác giả: Lan Âm\nLink lưu trữ: %1",
	horizontal_mirror: "Lật ngang kiểu gương",
	advanced_scale: "Tỉ lệ nâng cao",
	loading_midi: "Đang tải %1 ...",
	unsupported_fps_time_division_error: "Lỗi: Chế độ hiện tại không hỗ trợ định dạng dữ liệu phân chia khung hình trên giây.",
	low_version_error: "Lỗi: Phiên bản After Effects sử dụng hiện tại quá thấp, vui lòng cập nhật.",
	map_velocity: "Mapping Velocity",
	map_velocity_to_opacity: "Mapping Velocity tới Độ mờ",
	map_velocity_to_volume: "Mapping Velocity tới Âm lượng",
	opacity: "Độ mờ",
	audio_levels: "Audio level",
	notes_velocity: "Nốt velocity",
	has_no_video_error: "Lỗi: Layet đã chọn không chứa video nên không thể áp dụng hiệu ứng đã chọn.",
	motion_for_horizontal_flip: "Motion cho hiệu ứng lật ngang　",
	motion_entrance: "Vào",
	motion_exit: "Ra",
	motion_float_left: "Nổi trái",
	motion_float_right: "Nổi phải",
	motion_float_up: "Nổi lên",
	motion_float_down: "Nổi xuống",
	script_translator: "Phiên bản Việt hoá thực hiện bởi: ",
};

export default Vietnamese;

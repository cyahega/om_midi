import SChinese from "./SChinese";

const English: typeof SChinese = {
	ok: "OK",
	cancel: "Cancel",
	channel_abbr: "CH",
	error: "Error",
	warning: "Warning",
	apply: "Apply",
	settings: "Settings",
	select_all: "Select all",
	channel: "Channel",
	name: "name",
	note_count: "Note count",
	language: "Language",
	general: "General",
	app_default: "App Default",
	tools: "Tools",
	create_null_object_short: "Null",
	create_null_object: "Create Null Object",
	apply_effects_short: "Effects",
	apply_effects: "Apply Effects",
	marker_conductor: "Marker Conductor",
	easing_100_percent: "Easing 100%",
	unit: "Unit",
	time: "Time",
	frames: "Frames",
	seconds: "Seconds",
	beat: "Beat",
	shift_seconds_and_frames: "Shift",
	mark_on: "Mark on",
	add_null_layer: "Add null layer",
	current_layer: "Current layer",
	ease_in: "Ease in",
	ease_out: "Ease out",
	ease_in_out: "Ease in out",
	midi_track_selector_title: "Select MIDI tracks",
	select_at_least_one_track: "Please select at least one track.",
	no_midi_file_selected: "No MIDI file selected",
	select_midi_file: "MIDI",
	select_midi_track: "Track",
	set_midi_bpm: "BPM",
	start_time: "Start time",
	display_start_time: "Display start time",
	current_time: "Current time",
	work_area: "Work area",
	select_a_midi_file: "Select a MIDI Sequence",
	midi_files: "MIDI Sequence",
	all_files: "All Files",
	check_update: "Check for updates",
	repository_link: "Repository link",
	about_script_engine: "About ExtendScript engine",
	import_om_utils: "Import om utils",
	import_pure_quarter_midi: "Import pure quarter MIDI",
	using_selected_layer_name: "Use selected layer name instead of MIDI track name.",
	normalize_pan_to_100: "Normalize the pan to -100 ~ 100.",
	using_layering: "@Koorihato Sakuno's unique layering method.",
	optimize_apply_effects: "Optimize some effects visual.",
	add_to_effect_transform: "Add the properties to an effect called Transform.",
	sure_to_import_pure_quarter_midi: "Are you sure you want to import the pure quarter notes MIDI file?",
	pure_quarter_midi: "Pure quarter notes MIDI",
	add_at_top_of_expression: "Prepend to expressions",
	om_utils_same_as_project_directory: "If placed in the same directory as the aep project",
	om_utils_added_to_project: "If placed anywhere, and then add to AE project",
	pitch: "Pitch",
	velocity: "Velocity",
	duration: "Duration",
	scale: "Scale",
	cw_rotation: "Clockwise Rotation",
	ccw_ratation: "Counterclockwise Rotation",
	count: "Count",
	bool: "Bool",
	time_remap: "Time Remap",
	pingpong: "Ping-pong",
	note_on: "Note On",
	channel_pan: "Channel Pan",
	channel_volume: "Channel Volume",
	channel_glide: "Channel Glide",
	horizontal_flip: "Horizontal Flip",
	invert_color: "Invert Color",
	tuning: "Tuning",
	base_pitch: "Base pitch",
	paren_stretched: "(Stretched)",
	paren_truncated: "(Truncated)",
	cannot_find_window_error: "Error: Unable to find or create window.",
	unsupported_setting_type_error: "Error: Unsupported set data type.",
	file_unreadable_error: "Error: Could not read MIDI file. The file may already be occupied or not exist.",
	midi_header_validation_error: "Error: MIDI file header validation failed (not a standard MIDI file or the file is corrupt).",
	midi_track_header_validation_error: "Error: MIDI track block header validation failed.",
	midi_custom_events_error: "Error: Custom MIDI events could not be read.",
	midi_no_track_error: "Error: The MIDI file does not contain any valid tracks.",
	not_after_effects_error: "Error: Please use this script on Adobe After Effects.",
	cannot_create_file_error: "Error: Could not create file.",
	cannot_find_composition_error: "Error: Unable to find active composition. Please activate a composition first.",
	no_midi_error: "Error: Please open a valid MIDI file first.",
	no_options_checked_error: "Error: Please check at least one option.",
	no_layer_selected_error: "Error: No layers are selected in the current composition.",
	not_one_track_for_apply_effects_only_error: "Error: Applying effects can only select one track at a time.",
	end_of_track_position_error: "Error: Track ends in wrong position. Expected 0, actually 1.",
	cannot_set_time_remap_error: "Error: Time remapping cannot be set for the selected layer.",
	cannot_tuning_error: "Error: The selected layer does not contain audio and cannot be tuned.",
	about: "It reads a Standard MIDI sequence file and creates layers and keyframes corresponding to the notes and controllers in that MIDI sequence file.\n\nScript Original Authors: David Van Brink (omino), Dora (NGDXW), HanceyMica, Z4HD\nScript Author: Ranne\nRepository Link: %1",
	horizontal_mirror: "Horizontal Mirror",
	advanced_scale: "Advanced Scale",
};

export default English;

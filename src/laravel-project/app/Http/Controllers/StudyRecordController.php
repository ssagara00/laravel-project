<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyRecord;

class StudyRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $studyRecords = StudyRecord::all();
        return response()->json(
            $studyRecords, 200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $studyRecord = StudyRecord::create($request->all());
        return response()->json(
            $studyRecord, 200
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $studyRecord = StudyRecord::find($id);
        return response()->json(
            $studyRecord, 200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $update = [
            'date' => $request->date,
            'hour' => $request->hour,
        ];
        $studyRecord = StudyRecord::find($id)->update($update);
        if ($studyRecord) {
            return response()->json([
                'message' => 'studyRecord update successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'studyRecord not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $studyRecord = StudyRecord::find($id)->delete();
        if ($studyRecord) {
            return response()->json([
                'message' => 'studyRecord deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'studyRecord not found',
            ], 404);
        }
    }
}

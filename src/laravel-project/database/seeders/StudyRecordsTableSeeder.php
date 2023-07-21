<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DateTime;

class StudyRecordsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $scheduled_date = new DateTime();
        for ($i = 1; $i <= 10; $i++) {
            \App\Models\StudyRecord::create([
                'date' => $scheduled_date->modify('+1day')->format('Y-m-d'),
                'hour' => $i,
                'user_id' => $i,
            ]);
        }
    }
}

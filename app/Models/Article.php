<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    public $useTranslationFallback = true;
    

    public $translatedAttributes = ['title', 'content', 'slug', "description"];
    protected $fillable = [
        'user_id',
        'category_id',
        "isActive",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeActive(Builder $query)
    {
        $query->where('isActive', 1);
    }

}

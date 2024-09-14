<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mimachh\Slugme\Concerns\HasSlug;
use Mimachh\Slugme\Contracts\Sluggable;

class ArticleTranslation extends Model implements Sluggable
{
    use HasFactory, HasSlug;

    public function slugColumn(): string {
        return 'slug';
    }

    public function slugAttribute(): string {
        return 'title';
    }
    public $timestamps = false;
    protected $fillable = ['title', 'content', 'slug', "description"];
}

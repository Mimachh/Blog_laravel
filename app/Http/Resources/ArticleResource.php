<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category_id' => $this->category_id,
            'user_id' => $this->user_id,
            "content" => $this->translate(null, true)->content,
            "title" => $this->translate(null, true)->title,
            "slug" => $this->translate(null, true)->slug,
            // 'translations' => $this->translations,
        ];
    }
}

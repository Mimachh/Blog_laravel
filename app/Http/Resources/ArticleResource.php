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
            'user_id' => $this->user_id,
            "content" => $this->translate(null, true)->content,
            "description" => $this->translate(null, true)->description,
            "title" => $this->translate(null, true)->title,
            "slug" => $this->translate(null, true)->slug,
            // 'translations' => $this->translations,
            "category" => $this->whenLoaded('category', function () {
                return new CategoryResource($this->category);
            }),
            "user" => new UserResource($this->user),
            "updated_at" => $this->updated_at,
        ];
    }
}
